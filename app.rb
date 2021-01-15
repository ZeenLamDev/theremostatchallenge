require 'json'
require 'sinatra/base'

class App < Sinatra::Base

  enable :sessions

get '/' do
  File.read('./public/index.html')
end

post '/' do
  session[params[:temperature]]
  redirect('/')
end

  run! if app_file == $0
end