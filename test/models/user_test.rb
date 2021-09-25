# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # u = User.new
  # u.username = 'Houdini'
  # u.password = 'i_remember_kiki'
  # u.save
  # u = User.last
  # u.is_password?('i_remember_kiki')
  # u.is_password?('random_password_guess')
end
