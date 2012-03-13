require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get services" do
    get :services
    assert_response :success
  end

  test "should get schedule" do
    get :schedule
    assert_response :success
  end

  test "should get prices" do
    get :prices
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
