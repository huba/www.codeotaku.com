
source "https://rubygems.org"

gem "utopia", "~> 2.2.0"
gem "utopia-gallery", "~> 2.0"
gem "utopia-analytics"

gem "rake"
gem "bundler"

gem "rack-freeze", "~> 1.2"

gem "relaxo-model", "~> 0.10.0"

gem "trenni-sanitize"
gem "kramdown"
gem "bcrypt"

group :development do
	# For `rake server`:
	gem "async-http"
	
	gem "guard-falcon", require: false
	gem 'guard-rspec', require: false
	
	# For `rake console`:
	gem "pry"
	gem "rack-test"
	
	# For `rspec` testing:
	gem "rspec"
	gem "simplecov"
end

group :production do
	# Used for passenger-config to restart server after deployment:
	gem "passenger"
end
