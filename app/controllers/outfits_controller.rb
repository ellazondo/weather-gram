class OutfitsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        outfits = Outfit.all
        render json: outfits, status: :ok
    end

    def show
        outfit = Outfit.find(params[:id])
        render json: outfit, serializer: OutfitBreakdownSerializer
    end

    def update
        outfit = Outfit.find(params[:id])
        outfit.update!(outfit_params)
        render json: outfit 

    end

    def create 
        new_outfit = Outfit.create!(outfit_params)
        render json: new_outfit, status: :created
    end

    def destroy
        outfit = Outfit.find(params[:id])
        outfit.destroy
        head :no_content
    end

   
    private

    def outfit_params
        params.permit(:name, :temp_range, :rain, :occasion, :city, :outfit_img, :created_by)
    end

    def render_not_found_response
        render json: {error: "Outfit not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
