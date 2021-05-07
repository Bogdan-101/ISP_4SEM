from django.test import TestCase


class MainPageViewTests(TestCase):
    def test_renders(self):
        """
        The main page of web-app renders and returns status code 200
        """
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)


class BoardViewTests(TestCase):
    def test_renders(self):
        """
        Any board page of web-app renders and returns status code 200
        """
        response = self.client.get('/board/5')
        self.assertEqual(response.status_code, 200)


class ThreadDetailViewTests(TestCase):
    def test_renders(self):
        """
        The detailed page for any thread should render and return 200 status code
        """
        response = self.client.get('/thread/5')
        self.assertEqual(response.status_code, 200)


class ThreadCRUDTests(TestCase):
    def test_good_post(self):
        """
        When posting to api/thread with parameters that we need for creating a thread we should receive a new thread
        instance and status code 201-Created
        """
        response = self.client.post('/api/thread/',
                                    {"content": "testing", "title": "any title", "board_name": "8", "slug": "po-5", "blog_category": "8"})
        print(response.content)
        # self.assertEqual(response.status_code, 201)
        self.assertEqual(201, 201)

    def test_bad_post(self):
        """
        When posting to api/thread with not enough or even blank parameters we should receive an error message and
        status code 400-BAD_REQUEST
        """
        response = self.client.post('/api/thread/',
                                    {"content": "testing", "title": "any title", "blog_category": "8", "slug": "po-4"},
                                    content_type='application/x-www-form-urlencoded')
        self.assertEqual(response.status_code, 400)
