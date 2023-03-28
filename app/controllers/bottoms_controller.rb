class BottomsController < ApplicationController
        def show
        bottom = Outfit.find(params[:id])
        render json: bottom
    end
end
