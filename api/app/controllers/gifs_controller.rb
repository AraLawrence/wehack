class GifsController < ApplicationController
  def new
    response = HTTParty.get("http://api.giphy.com/v1/gifs/translate?s=neil%20degrasse%20tyson&api_key=dc6zaTOxFJmzC")
    render json: response["data"]["images"]["original"]["url"]
  end
end
