<?php 
	class TestService
	{
		/**
		 * this is a test service
		 *
		 * @Service(request=app.test.message.request,response=app.test.message.response,version=1.0)
		 */
		function myServiceMethod (&$request,&$response)
		{
			$data = &$response['data'];
			$requestdata = $request['data'];
			$data['message']='I received from you: ' . $requestdata['message'];
			$data['success']='true';
		}
	}
?>