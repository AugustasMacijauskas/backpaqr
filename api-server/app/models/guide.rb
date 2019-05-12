class Guide < ApplicationRecord
  validates :name, presence: true
  validates :city, presence: true
  has_many :locations
  
  def self.guides_with_recent_locations(how_many = nil)
    guides = Guide.order("created_at DESC");

    @guides_with_locations = []

    guides.each do |guide|
      @sorted_locations = guide.locations.sort_by { |location| location.created_at }
      length = @sorted_locations.length
      if how_many != nil && length >= how_many.to_i
        @sorted_locations = @sorted_locations[(length - how_many.to_i...length)]
      end

      @guides_with_locations << {
        id: guide.id,
        name: guide.name,
        city: guide.city,
        created_at: guide.created_at,
        locations: @sorted_locations
      }
    end

    return @guides_with_locations
  end
end
