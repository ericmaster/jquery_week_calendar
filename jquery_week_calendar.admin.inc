<?php 

/**
 * The jQuery profile settings form definition
 * @param array $form
 * @param array $form_state
 * @param string $pid
 */
function jquery_week_calendar_profile_form($form, &$form_state, $pid = NULL){
	//Get the profile object
	$profile = jquery_week_calendar_load_profile($pid);
	
	$form['date_format'] = array(
	  '#title' => 'Date Format',
	  '#type' => 'textfield',
	  '#default_value' = isset($profile->date_format)?$profile->date_format:'M d, Y';
	);
	
	$form['time_format'] = array(
	  '#title' => 'Time Format',
	  '#type' => 'textfield',
	  '#default_value' = isset($profile->date_format)?$profile->date_format:'h:i a';
	);
	
	return $form;
}