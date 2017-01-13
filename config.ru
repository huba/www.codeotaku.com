#!/usr/bin/env rackup

require_relative 'config/environment'

require 'utopia/session'
require 'utopia/tags/gallery'
require 'utopia/tags/google-analytics'

require 'rack/freeze'

if RACK_ENV == :production
	# Handle exceptions in production with a error page and send an email notification:
	use Utopia::Exceptions::Handler
	use Utopia::Exceptions::Mailer
else
	# We want to propate exceptions up when running tests:
	use Rack::ShowExceptions unless RACK_ENV == :test
	
	# Serve the public directory in a similar way to the web server:
	use Utopia::Static, root: 'public'
end

use Rack::Sendfile

use Utopia::ContentLength

use Utopia::Redirection::Rewrite,
	'/' => '/index'

use Utopia::Redirection::Moved, "/samuel-williams", "/about"
use Utopia::Redirection::Moved, "/blog", "/journal"
use Utopia::Redirection::Moved, "/game-mechanics-society", "http://www.gmsoc.org"

use Utopia::Redirection::DirectoryIndex

use Utopia::Redirection::Errors,
	404 => '/errors/file-not-found'

use Utopia::Localization,
	:default_locale => 'en',
	:locales => ['en', 'ja', 'zh']

require 'utopia/session'
use Utopia::Session,
	:expires_after => 3600 * 24,
	:secret => ENV['UTOPIA_SESSION_SECRET']

use Utopia::Controller

use Utopia::Static

# Serve dynamic content
use Utopia::Content,
	namespaces: {
		"gallery" => Utopia::Tags::Gallery
	}

run lambda { |env| [404, {}, []] }
