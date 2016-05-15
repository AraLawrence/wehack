require 'test_helper'

class QuoteControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get quote_new_url
    assert_response :success
  end

  test "should get create" do
    get quote_create_url
    assert_response :success
  end

  test "should get destroy" do
    get quote_destroy_url
    assert_response :success
  end

end
