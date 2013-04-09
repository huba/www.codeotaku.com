#!/usr/bin/env rackup

UTOPIA_ENV = (ENV['UTOPIA_ENV'] || ENV['RACK_ENV'] || :development).to_sym
$LOAD_PATH << File.join(File.dirname(__FILE__), "lib")

# It is recommended that you always explicity specify the version of the gem you are using.
require 'utopia/middleware/all'
require 'utopia/tags/all'

# From utopia-extras:
require 'utopia/tags/gallery'
require 'utopia/tags/google-analytics'

# Utopia relies heavily on accurately caching resources
gem 'rack-cache'
require 'rack/cache'

require 'to_bytes'

if UTOPIA_ENV == :development
	use Rack::ShowExceptions
else
	use Utopia::Middleware::ExceptionHandler, "/errors/exception"
	use Utopia::Middleware::MailExceptions
end

use Rack::ContentLength
use Utopia::Middleware::Logger

use Utopia::Middleware::Redirector, {
	:errors => {
		404 => "/errors/file-not-found"
	},
	:patterns => [
		[:moved, "/samuel-williams", "/about"],
		[:moved, "/blog", "/journal"],
		[:moved, "/game-mechanics-society", "http://www.gmsoc.org"],
	]
}

use Utopia::Middleware::Requester
use Utopia::Middleware::DirectoryIndex

require 'utopia/session/encrypted_cookie'
use Utopia::Session::EncryptedCookie, {
	:expire_after => 2592000,
	:secret => '6965ae9b95a55907648721638d70cf1a'
}

use Utopia::Middleware::Controller

use Utopia::Middleware::Localization, {
	:default => "en",
	:all => ["en", "jp", "cn"],
	:nonlocalized => [Regexp.starts_with('/_static/flags')]
}

# To enable full Sendfile support, please refer to the Rack::Sendfile documentation for your webserver.
use Rack::Sendfile
use Utopia::Middleware::Static

if UTOPIA_ENV == :production
	use Rack::Cache, {
		:metastore   => "file:#{Utopia::Middleware::default_root("cache/meta")}",
		:entitystore => "file:#{Utopia::Middleware::default_root("cache/body")}",
		:verbose => false
	}
end

use Utopia::Middleware::Content

run lambda {|env| [404, {}, []] }
