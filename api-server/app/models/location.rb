class Location < ApplicationRecord
  validates :latitude, presence: true
  validates :longitude, presence: true
  belongs_to :guide
end
