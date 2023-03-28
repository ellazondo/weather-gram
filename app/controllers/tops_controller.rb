class TopsController < ApplicationController
        
    def index
        top = Top.all
        render json: top 
    end

    def show
        top = Outfit.find(params[:id])
        render json: top 
    end

    

end
