/**
 * 
 */

app.factory('NotificationService',function($http){
	var notificationService={}
			notificationService.getNotificationsNotViewed=function(){
				return $http.get("http://localhost:8088/ProAngMe/getnotifications");
			}
	notificationService.getNotifications=function(id){
		console.log("id is "+id);
		return $http.get("http://localhost:8088/ProAngMe/getnotification/"+id)
	}
	notificationService.updateNotification=function(id){
		return $http.put("http://localhost:8088/ProAngMe/updatenotification/"+id)
	}
	return notificationService;
})