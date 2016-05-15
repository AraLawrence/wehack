class QuoteController < ApplicationController
  def new
    quote = Quote.find(rand(1...36))
    render json: quote
  end

  def create
  end

  def destroy
  end
end
