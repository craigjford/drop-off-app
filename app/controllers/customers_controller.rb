class CustomersController < ApplicationController

    # Get /customers
    def index
        customers = Customer.all
        render json: customers, status: :ok
    end

end
