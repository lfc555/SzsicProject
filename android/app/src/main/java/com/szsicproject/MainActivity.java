package com.szsicproject;

import com.facebook.react.ReactActivity;

//react-native-screens package requires one additional configuration step to properly work on Android devices
import android.os.Bundle;//lfc 2022年1月19日 16:30:58

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SzsicProject";
  }

  //2022年1月19日 16:31:11 lfc
  //react-native-screens package requires one additional configuration step to properly work on Android devices
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
