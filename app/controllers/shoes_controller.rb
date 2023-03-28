class ShoesController < ApplicationController
        def show
        shoe = Outfit.find(params[:id])
        render json: shoe
    end
end
