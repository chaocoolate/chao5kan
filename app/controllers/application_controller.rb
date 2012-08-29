class ApplicationController < ActionController::Base
  protect_from_forgery
  def template
  	render "/template"
  end
end
