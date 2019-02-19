class FanSerializer < ActiveModel::Serializer
  attributes :id, :name, :game_id
  has_one :game
  has_many :developers, through: :games
end
