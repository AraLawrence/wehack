class GifsController < ApplicationController
  def new
    gif = HTTParty.get("http://api.giphy.com/v1/gifs/translate?s=neil%20degrasse%20tyson&api_key=dc6zaTOxFJmzC")
    render json: gif
  end
end
