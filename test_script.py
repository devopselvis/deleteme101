import requests

def test_requests_version():
    assert requests.__version__ == '2.31.0', f"Incorrect requests version. Expected 2.31.0, got {requests.__version__}"

if __name__ == "__main__":
    test_requests_version()
    print("All tests passed!")
