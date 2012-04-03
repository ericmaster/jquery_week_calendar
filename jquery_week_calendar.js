(function ($) {
  Drupal.behaviors.jquery_week_calendar = {
    attach: function(context,settings) {
      if (Drupal.settings && Drupal.settings.jqueryWeekCalendar) {
        jqueryWeekCalendarSettings = Drupal.settings.jqueryWeekCalendar;
        $('#'.jqueryWeekCalendarSettings.id).weekCalendar({
          timeslotsPerHour: jqueryWeekCalendarSettings.timeslotsPerHour,
          height: function($calendar){
            return jqueryWeekCalendarSettings.timeslotsPerHour;
          },
          eventRender : function(calEvent, $event) {
            if(calEvent.end.getTime() < new Date().getTime()) {
              $event.css("backgroundColor", jqueryWeekCalendarSettings.pastEventColor);
            }
          },
          eventNew : function(calEvent, $event) {
            //display modal frame to add event data
          },
          eventDrop : function(calEvent, $event) {
            
          },
          eventResize : function(calEvent, $event) {
            
          },
          eventClick : function(calEvent, $event) {
            
          },
          eventMouseover : function(calEvent, $event) {
            
          },
          eventMouseout : function(calEvent, $event) {
            
          },
          eventDelete: function(calEvent, element, dayFreeBusyManager, 
              calendar, clickEvent) {
            calendar.weekCalendar('removeEvent',calEvent.id);
          },
          noEvents : function() {
            
          },
          data:eventData
        });
      }
    }
  }
}(jQuery))