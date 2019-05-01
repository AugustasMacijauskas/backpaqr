class Guide < ApplicationRecord
  validates :name, presence: true
  validates :city, presence: true
  has_many :locations
  
  def self.guides_with_recent_locations(how_many = 5)
    guides = Guide.order("created_at DESC");

    @guides_with_locations = []

    guides.each do |guide|
      @sorted_locations = guide.locations.sort_by { |location| location.created_at }
      length = @sorted_locations.length
      if length >= how_many.to_i
        @sorted_locations = @sorted_locations[(length - how_many.to_i...length)]
      end

      @guides_with_locations << { guide: guide, locations: @sorted_locations }
    end

    return @guides_with_locations
  end
end
