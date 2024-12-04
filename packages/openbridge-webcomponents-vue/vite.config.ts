
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      // Ensures no deps are bundled with build.
      // Source paths are expected to start with `./` or `/` but may be
      // `x:` on Windows.
      external: (id: string) => !id.match(/^((\w:)|(\.?[\\/]))/),
      input: [
        './src/automation/automation-button/ObcAutomationButton.vue', './src/automation/automation-input-modal/ObcAutomationInputModal.vue', './src/automation/automation-readout/ObcAutomationReadout.vue', './src/automation/automation-tank/ObcAutomationTank.vue', './src/automation/corner-line/ObcCornerLine.vue', './src/automation/direction-line/ObcDirectionLine.vue', './src/automation/end-point-line/ObcEndPointLine.vue', './src/automation/horizontal-line/ObcHorizontalLine.vue', './src/automation/line-cross/ObcLineCross.vue', './src/automation/line-overlap/ObcLineOverlap.vue', './src/automation/three-way-line/ObcThreeWayLine.vue', './src/automation/valve/ObcValve.vue', './src/automation/valve-analog-three-way-icon/ObcValveAnalogThreeWayIcon.vue', './src/automation/valve-analoge-two-way-icon/ObcValveAnalogTwoWayIcon.vue', './src/automation/vertical-line/ObcVerticalLine.vue', './src/components/alert-button/ObcAlertButton.vue', './src/components/alert-icon/ObcAlertIcon.vue', './src/components/alert-menu/ObcAlertMenu.vue', './src/components/alert-menu-item/ObcAlertMenuItem.vue', './src/components/alert-topbar-element/ObcAlertTopbarElement.vue', './src/components/app-button/ObcAppButton.vue', './src/components/app-menu/ObcAppMenu.vue', './src/components/badge/ObcBadge.vue', './src/components/breadcrumb/ObcBreadcrumb.vue', './src/components/brilliance-menu/ObcBrillianceMenu.vue', './src/components/button/ObcButton.vue', './src/components/card-list-button/ObcCardListButton.vue', './src/components/clock/ObcClock.vue', './src/components/context-menu/ObcContextMenu.vue', './src/components/divider/ObcDivider.vue', './src/components/icon-button/ObcIconButton.vue', './src/components/input/ObcInput.vue', './src/components/navigation-item/ObcNavigationItem.vue', './src/components/navigation-menu/ObcNavigationMenu.vue', './src/components/notification-button/ObcNotificationButton.vue', './src/components/notification-message/ObcNotificationMessage.vue', './src/components/notification-message-item/ObcNotificationMessageItem.vue', './src/components/poi-target-button/ObcPoiTargetButton.vue', './src/components/rich-button/ObcRichButton.vue', './src/components/scrollbar/ObcScrollbar.vue', './src/components/slider/ObcSlider.vue', './src/components/table/ObcTableCell.vue', './src/components/table/ObcTableHeadCell.vue', './src/components/table/ObcTableRow.vue', './src/components/table/ObcTableHeader.vue', './src/components/table/ObcTableBody.vue', './src/components/table/ObcTable.vue', './src/components/table/table.ts', './src/components/toggle-button-group/ObcToggleButtonGroup.vue', './src/components/toggle-button-option/ObcToggleButtonOption.vue', './src/components/toggle-switch/ObcToggleSwitch.vue', './src/components/tooltip/ObcTooltip.vue', './src/components/top-bar/ObcTopBar.vue', './src/components/vendor-button/ObcVendorButton.vue', './src/icons/Obi01Add.vue', './src/icons/Obi01ApplicationOpen.vue', './src/icons/Obi01Apps.vue', './src/icons/Obi01Check.vue', './src/icons/Obi01CheckboxChecked.vue', './src/icons/Obi01CheckboxUncheck.vue', './src/icons/Obi01Close.vue', './src/icons/Obi01ContentCopy.vue', './src/icons/Obi01ContentCut.vue', './src/icons/Obi01ContentPaste.vue', './src/icons/Obi01Delete.vue', './src/icons/Obi01Edit.vue', './src/icons/Obi01Expanditem.vue', './src/icons/Obi01FileDownload.vue', './src/icons/Obi01FileExport.vue', './src/icons/Obi01FileUpload.vue', './src/icons/Obi01LogAdd.vue', './src/icons/Obi01LogEdit.vue', './src/icons/Obi01LogOpen.vue', './src/icons/Obi01Megamenu.vue', './src/icons/Obi01Menu.vue', './src/icons/Obi01Mixed.vue', './src/icons/Obi01MoreVertical.vue', './src/icons/Obi01More.vue', './src/icons/Obi01NoteEdit.vue', './src/icons/Obi01Off.vue', './src/icons/Obi01On.vue', './src/icons/Obi01OpenFull.vue', './src/icons/Obi01PlaceholderDeviceOff.vue', './src/icons/Obi01PlaceholderDeviceOn.vue', './src/icons/Obi01PlaceholderDeviceStatic.vue', './src/icons/Obi01Placeholder.vue', './src/icons/Obi01Play.vue', './src/icons/Obi01Print.vue', './src/icons/Obi01Redo.vue', './src/icons/Obi01Refresh.vue', './src/icons/Obi01Remove.vue', './src/icons/Obi01Reorder.vue', './src/icons/Obi01Save.vue', './src/icons/Obi01Search.vue', './src/icons/Obi01Sort.vue', './src/icons/Obi01Standby.vue', './src/icons/Obi01Stop.vue', './src/icons/Obi01Sync.vue', './src/icons/Obi01Text.vue', './src/icons/Obi01Undo.vue', './src/icons/Obi01VisibilityOff.vue', './src/icons/Obi01Visibility.vue', './src/icons/Obi01WidgetAdd.vue', './src/icons/Obi02ArrowBack.vue', './src/icons/Obi02ArrowDown.vue', './src/icons/Obi02ArrowDropDown.vue', './src/icons/Obi02ArrowFlyout.vue', './src/icons/Obi02ArrowForward.vue', './src/icons/Obi02ArrowUp.vue', './src/icons/Obi02ChevronDoubleDown.vue', './src/icons/Obi02ChevronDoubleLeft.vue', './src/icons/Obi02ChevronDoubleRight.vue', './src/icons/Obi02ChevronDoubleUp.vue', './src/icons/Obi02ChevronDown.vue', './src/icons/Obi02ChevronLeft.vue', './src/icons/Obi02ChevronRight.vue', './src/icons/Obi02ChevronUp.vue', './src/icons/Obi02CollapseContent.vue', './src/icons/Obi02DockBottom.vue', './src/icons/Obi02DockLeft.vue', './src/icons/Obi02DockRight.vue', './src/icons/Obi02DropDown.vue', './src/icons/Obi02ExpandContent.vue', './src/icons/Obi02PageFirst.vue', './src/icons/Obi02PageLast.vue', './src/icons/Obi02ResizeBottom.vue', './src/icons/Obi02ResizeCorner.vue', './src/icons/Obi02ResizeTop.vue', './src/icons/Obi02Resize_center.vue', './src/icons/Obi02SetPoint.vue', './src/icons/Obi02SlideLeft.vue', './src/icons/Obi02SlideRight.vue', './src/icons/Obi02UnfoldLess.vue', './src/icons/Obi02UnfoldMore.vue', './src/icons/Obi03Configure.vue', './src/icons/Obi03Diagnostic.vue', './src/icons/Obi03Filter.vue', './src/icons/Obi03Info.vue', './src/icons/Obi03License.vue', './src/icons/Obi03Monitoring.vue', './src/icons/Obi03PinChecked.vue', './src/icons/Obi03PinUnchecked.vue', './src/icons/Obi03Printscreen.vue', './src/icons/Obi03SettingsDefaultAlt1.vue', './src/icons/Obi03SettingsDefaultAlt2.vue', './src/icons/Obi03SettingsDefault.vue', './src/icons/Obi03Settings.vue', './src/icons/Obi03SplitLeft.vue', './src/icons/Obi03SplitRight.vue', './src/icons/Obi03StarChecked.vue', './src/icons/Obi03StarUnchecked.vue', './src/icons/Obi03Support.vue', './src/icons/Obi03Table.vue', './src/icons/Obi03VolumeHigh.vue', './src/icons/Obi03VolumeLow.vue', './src/icons/Obi03VolumeOff.vue', './src/icons/Obi04BrillianceHigh.vue', './src/icons/Obi04BrillianceLow.vue', './src/icons/Obi04Colorcalibrated.vue', './src/icons/Obi04DayBright.vue', './src/icons/Obi04Day.vue', './src/icons/Obi04Daynight.vue', './src/icons/Obi04Dimming.vue', './src/icons/Obi04Dusk.vue', './src/icons/Obi04IlluminationHigh.vue', './src/icons/Obi04IlluminationLow.vue', './src/icons/Obi04Night.vue', './src/icons/Obi05FullscreenExit.vue', './src/icons/Obi05Fullscreen.vue', './src/icons/Obi05InputKeyboard.vue', './src/icons/Obi05InputKeyboard_onscreen.vue', './src/icons/Obi05InputMouse.vue', './src/icons/Obi05InputTouchpad_mouse.vue', './src/icons/Obi05Pc.vue', './src/icons/Obi05People.vue', './src/icons/Obi05ScreenDesk.vue', './src/icons/Obi05ScreenFull.vue', './src/icons/Obi05ScreenPad.vue', './src/icons/Obi05ScreenQuad.vue', './src/icons/Obi05ScreenSplitLeft.vue', './src/icons/Obi05ScreenSplitRight.vue', './src/icons/Obi05Server.vue', './src/icons/Obi05User.vue', './src/icons/Obi06Calendar.vue', './src/icons/Obi06Cam.vue', './src/icons/Obi06Cctv.vue', './src/icons/Obi06Com.vue', './src/icons/Obi06Conning.vue', './src/icons/Obi06DashboardOutline.vue', './src/icons/Obi06Dashboard.vue', './src/icons/Obi06Date.vue', './src/icons/Obi06EcdisSimple.vue', './src/icons/Obi06Ecdis.vue', './src/icons/Obi06Home.vue', './src/icons/Obi06Ias.vue', './src/icons/Obi06Lantern.vue', './src/icons/Obi06LinkRemove.vue', './src/icons/Obi06Link.vue', './src/icons/Obi06LogoCompany.vue', './src/icons/Obi06LogoOicl.vue', './src/icons/Obi06Openbridge.vue', './src/icons/Obi06Radar.vue', './src/icons/Obi06Screens.vue', './src/icons/Obi06Ship.vue', './src/icons/Obi06Time.vue', './src/icons/Obi06Wipers.vue', './src/icons/Obi07Ais.vue', './src/icons/Obi07Anchorwatch.vue', './src/icons/Obi07Catzoc.vue', './src/icons/Obi07CentreOff.vue', './src/icons/Obi07CentreOn.vue', './src/icons/Obi07ChartInfo.vue', './src/icons/Obi07ChartSearch.vue', './src/icons/Obi07ChartSettings.vue', './src/icons/Obi07ChartStyles.vue', './src/icons/Obi07Chart.vue', './src/icons/Obi07Coordinate.vue', './src/icons/Obi07Ebl.vue', './src/icons/Obi07Erbl.vue', './src/icons/Obi07EventRecord.vue', './src/icons/Obi07GridOff.vue', './src/icons/Obi07GridOn.vue', './src/icons/Obi07HeadinglineOff.vue', './src/icons/Obi07Layers.vue', './src/icons/Obi07Location1.vue', './src/icons/Obi07Location2.vue', './src/icons/Obi07Location3.vue', './src/icons/Obi07Measure.vue', './src/icons/Obi07RadarOverlay.vue', './src/icons/Obi07Range.vue', './src/icons/Obi07Rangerings.vue', './src/icons/Obi07RelativemotionVariant.vue', './src/icons/Obi07Relativemotion.vue', './src/icons/Obi07ReportInfo.vue', './src/icons/Obi07RoutePlanning.vue', './src/icons/Obi07Silence.vue', './src/icons/Obi07Smode.vue', './src/icons/Obi07TargetAssociatedAisCamera.vue', './src/icons/Obi07TargetAssociatedCameraRadar.vue', './src/icons/Obi07TargetAssociatedRadarCamera.vue', './src/icons/Obi07TargetCamera.vue', './src/icons/Obi07TargetCancelAll.vue', './src/icons/Obi07TargetCancel.vue', './src/icons/Obi07TargetSelect.vue', './src/icons/Obi07TrackNo.vue', './src/icons/Obi07TrackOffPort.vue', './src/icons/Obi07TrackOffStrb.vue', './src/icons/Obi07TrackOn.vue', './src/icons/Obi07TrackRoute.vue', './src/icons/Obi07Track.vue', './src/icons/Obi07TruemotionReset.vue', './src/icons/Obi07TruemotionVariant.vue', './src/icons/Obi07Truemotion.vue', './src/icons/Obi07UpCourse.vue', './src/icons/Obi07UpHead.vue', './src/icons/Obi07UpNorth.vue', './src/icons/Obi07Voyages.vue', './src/icons/Obi07Vrm.vue', './src/icons/Obi07WaypointAdd.vue', './src/icons/Obi07WaypointDelete.vue', './src/icons/Obi07WaypointEdit.vue', './src/icons/Obi08ACDCConverter.vue', './src/icons/Obi08Auto.vue', './src/icons/Obi08BackwardFast.vue', './src/icons/Obi08BackwardStopped.vue', './src/icons/Obi08Backward.vue', './src/icons/Obi08Battery0.vue', './src/icons/Obi08Battery25.vue', './src/icons/Obi08Battery50.vue', './src/icons/Obi08Battery75.vue', './src/icons/Obi08BatteryCharging.vue', './src/icons/Obi08BatteryPack0.vue', './src/icons/Obi08BatteryPack100.vue', './src/icons/Obi08BatteryPack25.vue', './src/icons/Obi08BatteryPack50.vue', './src/icons/Obi08BatteryPack70.vue', './src/icons/Obi08BatteryPackCharging.vue', './src/icons/Obi08Battery_full.vue', './src/icons/Obi08Bilge.vue', './src/icons/Obi08BlowerOffVertical.vue', './src/icons/Obi08BlowerOnVertical.vue', './src/icons/Obi08BlowerStaticVertical.vue', './src/icons/Obi08ConnectorCross.vue', './src/icons/Obi08Cooling.vue', './src/icons/Obi08DCDCConverter.vue', './src/icons/Obi08Duty.vue', './src/icons/Obi08Engine.vue', './src/icons/Obi08Epms.vue', './src/icons/Obi08EthernetSwitch.vue', './src/icons/Obi08FanOff.vue', './src/icons/Obi08FanOn.vue', './src/icons/Obi08FanStatic.vue', './src/icons/Obi08Filter.vue', './src/icons/Obi08Fire.vue', './src/icons/Obi08ForwardFast.vue', './src/icons/Obi08ForwardStopped.vue', './src/icons/Obi08Forward.vue', './src/icons/Obi08Generator.vue', './src/icons/Obi08Heat.vue', './src/icons/Obi08Heat_pump_balance.vue', './src/icons/Obi08Heatexhanger.vue', './src/icons/Obi08Heatpump.vue', './src/icons/Obi08Hvac.vue', './src/icons/Obi08HydraulicSeparator.vue', './src/icons/Obi08IO.vue', './src/icons/Obi08LocalOnly.vue', './src/icons/Obi08Local.vue', './src/icons/Obi08Logger.vue', './src/icons/Obi08ManuelOnly.vue', './src/icons/Obi08Manuel.vue', './src/icons/Obi08Misc.vue', './src/icons/Obi08MotorOffHorisontal.vue', './src/icons/Obi08MotorOffVertical.vue', './src/icons/Obi08MotorOnHorisontal.vue', './src/icons/Obi08MotorOnVertical.vue', './src/icons/Obi08MotorStaticHorisontal.vue', './src/icons/Obi08MotorStaticVertical.vue', './src/icons/Obi08Off.vue', './src/icons/Obi08On.vue', './src/icons/Obi08PLSComponent.vue', './src/icons/Obi08PLS.vue', './src/icons/Obi08PumpOffHorisontal.vue', './src/icons/Obi08PumpOffVertical.vue', './src/icons/Obi08PumpOnHorisontal.vue', './src/icons/Obi08PumpOnVertical.vue', './src/icons/Obi08PumpStaticHorisontal.vue', './src/icons/Obi08PumpStaticVertical.vue', './src/icons/Obi08Router.vue', './src/icons/Obi08Simulation.vue', './src/icons/Obi08Standby.vue', './src/icons/Obi08System.vue', './src/icons/Obi08Tank.vue', './src/icons/Obi08TempCold.vue', './src/icons/Obi08TempHot.vue', './src/icons/Obi08TempHotcold.vue', './src/icons/Obi08Trend.vue', './src/icons/Obi08WiperFluid.vue', './src/icons/Obi08Wiper.vue', './src/icons/Obi09Connector3way.vue', './src/icons/Obi09ConnectorCorner.vue', './src/icons/Obi09ConnectorStraight.vue', './src/icons/Obi09DamperHorizontalOffLarge.vue', './src/icons/Obi09DamperHorizontalOff.vue', './src/icons/Obi09DamperHorizontalOnLarge.vue', './src/icons/Obi09DamperHorizontalOn.vue', './src/icons/Obi09Pipe3way.vue', './src/icons/Obi09PipeCorner.vue', './src/icons/Obi09PipeCross.vue', './src/icons/Obi09PipeDirection.vue', './src/icons/Obi09PipeEnd.vue', './src/icons/Obi09PipeStraight.vue', './src/icons/Obi09SwitchHorizontalOffLarge.vue', './src/icons/Obi09SwitchHorizontalOff.vue', './src/icons/Obi09SwitchHorizontalOnLarge.vue', './src/icons/Obi09SwitchHorizontalOn.vue', './src/icons/Obi09ThreewayAnalogLeft0.vue', './src/icons/Obi09ThreewayAnalogLeft100.vue', './src/icons/Obi09ThreewayAnalogLeft25.vue', './src/icons/Obi09ThreewayAnalogLeft50.vue', './src/icons/Obi09ThreewayAnalogLeft75.vue', './src/icons/Obi09ThreewayAnalogRight0.vue', './src/icons/Obi09ThreewayAnalogRight100.vue', './src/icons/Obi09ThreewayAnalogRight25.vue', './src/icons/Obi09ThreewayAnalogRight50.vue', './src/icons/Obi09ThreewayAnalogRight75.vue', './src/icons/Obi09ThreewayAnalogTop0.vue', './src/icons/Obi09ThreewayAnalogTop100.vue', './src/icons/Obi09ThreewayAnalogTop25.vue', './src/icons/Obi09ThreewayAnalogTop50.vue', './src/icons/Obi09ThreewayAnalogTop75.vue', './src/icons/Obi09ThreewayDigitalClosedLeft.vue', './src/icons/Obi09ThreewayDigitalClosedRight.vue', './src/icons/Obi09ThreewayDigitalClosedTop.vue', './src/icons/Obi09ThreewayDigitalClosed.vue', './src/icons/Obi09ThreewayDigitalOpen.vue', './src/icons/Obi09ThreewayDigitalStatic.vue', './src/icons/Obi09TwowayAnalogClosed.vue', './src/icons/Obi09TwowayAnalogOpen25.vue', './src/icons/Obi09TwowayAnalogOpen5.vue', './src/icons/Obi09TwowayAnalogOpen50.vue', './src/icons/Obi09TwowayAnalogOpen75.vue', './src/icons/Obi09TwowayAnalogOpen.vue', './src/icons/Obi09TwowayDigitalClosed.vue', './src/icons/Obi09TwowayDigitalNonreturn.vue', './src/icons/Obi09TwowayDigitalOpen.vue', './src/icons/Obi09TwowayDigitalStatic.vue', './src/icons/Obi10Autonomous.vue', './src/icons/Obi10Autopilot.vue', './src/icons/Obi10Autotrack.vue', './src/icons/Obi10Joystick.vue', './src/icons/Obi10KeepingArea.vue', './src/icons/Obi10KeepingStation.vue', './src/icons/Obi10KeepingTrack.vue', './src/icons/Obi10MonotoringRoute.vue', './src/icons/Obi10Move.vue', './src/icons/Obi10PropulsionStatic.vue', './src/icons/Obi10Propulsion.vue', './src/icons/Obi10Rotate.vue', './src/icons/Obi10Rudder.vue', './src/icons/Obi10ThrusterAzimuth.vue', './src/icons/Obi10ThrusterMainengine.vue', './src/icons/Obi10ThrusterTunnel.vue', './src/icons/Obi11Current1.vue', './src/icons/Obi11Current2.vue', './src/icons/Obi11Current3.vue', './src/icons/Obi11Current4.vue', './src/icons/Obi11Wind1.vue', './src/icons/Obi11Wind10.vue', './src/icons/Obi11Wind11.vue', './src/icons/Obi11Wind12.vue', './src/icons/Obi11Wind13.vue', './src/icons/Obi11Wind2.vue', './src/icons/Obi11Wind3.vue', './src/icons/Obi11Wind4.vue', './src/icons/Obi11Wind5.vue', './src/icons/Obi11Wind6.vue', './src/icons/Obi11Wind7.vue', './src/icons/Obi11Wind8.vue', './src/icons/Obi11Wind9.vue', './src/icons/Obi12Altitute.vue', './src/icons/Obi12Cog.vue', './src/icons/Obi12Depth.vue', './src/icons/Obi12Hdg.vue', './src/icons/Obi12Heave.vue', './src/icons/Obi12Pitch.vue', './src/icons/Obi12Roll.vue', './src/icons/Obi12Rot.vue', './src/icons/Obi12Sog.vue', './src/icons/Obi12Stw.vue', './src/icons/Obi12Turn.vue', './src/icons/Obi12Yaw.vue', './src/icons/Obi13CameraOff.vue', './src/icons/Obi13CameraOn.vue', './src/icons/Obi13CameraTilt.vue', './src/icons/Obi13Coffee.vue', './src/icons/Obi13Container.vue', './src/icons/Obi13Crane.vue', './src/icons/Obi13Latched.vue', './src/icons/Obi13Winch.vue', './src/icons/Obi14AlarmAbandon.vue', './src/icons/Obi14AlarmAcknowledged.vue', './src/icons/Obi14AlarmBadge.vue', './src/icons/Obi14AlarmEmergency.vue', './src/icons/Obi14AlarmFire.vue', './src/icons/Obi14AlarmGeneral.vue', './src/icons/Obi14AlarmNoack.vue', './src/icons/Obi14AlarmOutline.vue', './src/icons/Obi14AlarmPob.vue', './src/icons/Obi14AlarmRectified.vue', './src/icons/Obi14AlarmSilenced.vue', './src/icons/Obi14AlarmTransferred.vue', './src/icons/Obi14AlarmTrigger.vue', './src/icons/Obi14AlarmUnack.vue', './src/icons/Obi14Alarm.vue', './src/icons/Obi14AlertList.vue', './src/icons/Obi14AlertOff.vue', './src/icons/Obi14AlertRectified.vue', './src/icons/Obi14AlertheaderAggregatedLarge.vue', './src/icons/Obi14AlertheaderAggregated.vue', './src/icons/Obi14AlertheaderGroupLarge.vue', './src/icons/Obi14AlertheaderGroup.vue', './src/icons/Obi14Alerts.vue', './src/icons/Obi14AudioLow.vue', './src/icons/Obi14Audio.vue', './src/icons/Obi14CautionBadge.vue', './src/icons/Obi14CautionColor.vue', './src/icons/Obi14CautionOutline.vue', './src/icons/Obi14Caution.vue', './src/icons/Obi14Exclamationmark.vue', './src/icons/Obi14MessageNone.vue', './src/icons/Obi14Message.vue', './src/icons/Obi14Mute.vue', './src/icons/Obi14NotificationEmpty.vue', './src/icons/Obi14Notification.vue', './src/icons/Obi14Rectified.vue', './src/icons/Obi14RunningColor.vue', './src/icons/Obi14Running.vue', './src/icons/Obi14Shelf.vue', './src/icons/Obi14SignalFail.vue', './src/icons/Obi14WarningAcknowledged.vue', './src/icons/Obi14WarningBadge.vue', './src/icons/Obi14WarningNoack.vue', './src/icons/Obi14WarningOutline.vue', './src/icons/Obi14WarningRectified.vue', './src/icons/Obi14WarningSilenced.vue', './src/icons/Obi14WarningTransferred.vue', './src/icons/Obi14WarningUnacknowledged.vue', './src/icons/Obi14Warning.vue', './src/icons/Obi15Backwards10S.vue', './src/icons/Obi15CallActive.vue', './src/icons/Obi15CallEnd.vue', './src/icons/Obi15Call.vue', './src/icons/Obi15Contacts.vue', './src/icons/Obi15Forward10S.vue', './src/icons/Obi15Fullscreen.vue', './src/icons/Obi15Galleryview.vue', './src/icons/Obi15History.vue', './src/icons/Obi15Live.vue', './src/icons/Obi15Loop.vue', './src/icons/Obi15MicMuted.vue', './src/icons/Obi15Mic.vue', './src/icons/Obi15PaList.vue', './src/icons/Obi15Pa.vue', './src/icons/Obi15PauseCircle.vue', './src/icons/Obi15Pause.vue', './src/icons/Obi15PlayCircle.vue', './src/icons/Obi15Play.vue', './src/icons/Obi15Radio.vue', './src/icons/Obi15Rank1.vue', './src/icons/Obi15Rank2.vue', './src/icons/Obi15Rank3.vue', './src/icons/Obi15Rank4.vue', './src/icons/Obi15Rank5.vue', './src/icons/Obi15Rank6.vue', './src/icons/Obi15Record.vue', './src/icons/Obi15Singleview.vue', './src/icons/Obi15SkipNextFilled.vue', './src/icons/Obi15SkipNext.vue', './src/icons/Obi15SkipPreviousFilled.vue', './src/icons/Obi15SkipPrevious.vue', './src/icons/Obi16CommandAvailable.vue', './src/icons/Obi16CommandIn.vue', './src/icons/Obi16CommandNo.vue', './src/icons/Obi16CommandPartial.vue', './src/icons/Obi16CommandRequest.vue', './src/icons/Obi16CommandShared.vue', './src/icons/Obi16CommandTake.vue', './src/icons/Obi16Lock.vue', './src/icons/Obi17Diver.vue', './src/icons/Obi17Kayaking.vue', './src/icons/Obi17Kitesurfing.vue', './src/icons/Obi17Rowing.vue', './src/icons/Obi17ShipBulkcarrier.vue', './src/icons/Obi17ShipCarferry.vue', './src/icons/Obi17ShipContainer.vue', './src/icons/Obi17ShipFishing.vue', './src/icons/Obi17ShipHighspeed.vue', './src/icons/Obi17ShipNavy.vue', './src/icons/Obi17ShipOffshore.vue', './src/icons/Obi17ShipPassenger.vue', './src/icons/Obi17ShipSailboat.vue', './src/icons/Obi17ShipSailship.vue', './src/icons/Obi17ShipTanker.vue', './src/icons/Obi17ShipTugboat.vue', './src/icons/Obi17ShipYacht.vue', './src/icons/Obi17Surfing.vue', './src/icons/Obi17Swimming.vue', './src/icons/Obi18AisAground.vue', './src/icons/Obi18AisAnchor.vue', './src/icons/Obi18AisAnchored.vue', './src/icons/Obi18AisFishing.vue', './src/icons/Obi18AisMoored.vue', './src/icons/Obi18AisNotcommand.vue', './src/icons/Obi18AisNotunderway.vue', './src/icons/Obi18AisUnderwaysailing.vue', './src/icons/Obi18AisUnderwayusingengine.vue', './src/icons/Obi19Analytics.vue', './src/icons/Obi19Current.vue', './src/icons/Obi19Hide.vue', './src/icons/Obi19LimitsAttention.vue', './src/icons/Obi19LimitsImproving.vue', './src/icons/Obi19LimitsInside.vue', './src/icons/Obi19LimitsOutsideOver.vue', './src/icons/Obi19LimitsOutsideUnder.vue', './src/icons/Obi19PilotOnboard.vue', './src/icons/Obi19SpeedGood.vue', './src/icons/Obi19SpeedHigh.vue', './src/icons/Obi19SpeedLow.vue', './src/icons/Obi19Speed.vue', './src/icons/Obi19Swell.vue', './src/icons/Obi19Temperature.vue', './src/icons/Obi19TimeLess.vue', './src/icons/Obi19TimeMore.vue', './src/icons/Obi19TrendDown.vue', './src/icons/Obi19TrendUp.vue', './src/icons/Obi19Trophy.vue', './src/icons/Obi19View.vue', './src/icons/Obi19Wave.vue', './src/icons/Obi19Weather.vue', './src/icons/Obi20CellBad.vue', './src/icons/Obi20CellFull.vue', './src/icons/Obi20CellLow.vue', './src/icons/Obi20CellMedium.vue', './src/icons/Obi20CellOff.vue', './src/icons/Obi20SatelliteFull.vue', './src/icons/Obi20SatelliteLow.vue', './src/icons/Obi20SatelliteMedium.vue', './src/icons/Obi20SatelliteOff.vue', './src/icons/Obi20SensorGpsBad.vue', './src/icons/Obi20SensorGpsFull.vue', './src/icons/Obi20SensorGpsLow.vue', './src/icons/Obi20SensorGpsMedium.vue', './src/icons/Obi20SensorGyro.vue', './src/icons/Obi20SensorWind.vue', './src/icons/Obi20USB.vue', './src/icons/Obi20WifiBad.vue', './src/icons/Obi20WifiOff.vue', './src/icons/Obi20WifiWifi_statusbar_0.vue', './src/icons/Obi20WifiWifi_statusbar_1.vue', './src/icons/Obi20WifiWifi_statusbar_2.vue', './src/icons/Obi20WifiWifi_statusbar_3.vue', './src/icons/Obi20WifiWifi_statusbar_4.vue', './src/icons/Obi20Wifi2Off.vue', './src/icons/Obi20Wifi2.vue', './src/icons/ObiFrame2622.vue', './src/icons/ObiIEC02AisTargetActivatedSelected.vue', './src/icons/ObiIEC02AisTargetActivated.vue', './src/icons/ObiIEC02AssociatedTargetAis.vue', './src/icons/ObiIEC02AssociatedTargetRadar.vue', './src/icons/ObiIEC02RadarTargetTrackedSelected.vue', './src/icons/ObiIEC02RadarTargetTracked.vue', './src/icons/ObiTemp.vue', './src/navigation-instruments/azimuth-thruster/ObcAzimuthThruster.vue', './src/navigation-instruments/azimuth-thruster-labeled/ObcAzimuthThrusterLabeled.vue', './src/navigation-instruments/badge-command/ObcBadgeCommand.vue', './src/navigation-instruments/compass/ObcCompass.vue', './src/navigation-instruments/compass-flat/ObcCompassFlat.vue', './src/navigation-instruments/instrument-field/ObcInstrumentField.vue', './src/navigation-instruments/main-engine/ObcMainEngine.vue', './src/navigation-instruments/poi-graphic-line/ObcPoiGraphicLine.vue', './src/navigation-instruments/poi-line/ObcPoiLine.vue', './src/navigation-instruments/poi-target/ObcPoiTarget.vue', './src/navigation-instruments/rudder/ObcRudder.vue', './src/navigation-instruments/thruster/ObcThruster.vue', './src/navigation-instruments/watch/ObcWatch.vue', './src/navigation-instruments/watch-flat/ObcWatchFlat.vue'
      ],
      preserveEntrySignatures: "strict",
      output: {
        format: 'es',
        entryFileNames: ({ name }) => `${name}.js`,
        dir: './',
        sourcemap: true,
        preserveModules: true,
			  preserveModulesRoot: 'src',
      }
    },
    outDir: './'
  },
  plugins: [vue(), typescript()],
};