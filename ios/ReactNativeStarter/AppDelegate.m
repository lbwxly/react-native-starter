/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  // Set the bundle file url
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  // Load the root view with the javacript bundle file., module name is defined in the RN side.
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ReactNativeStarter"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  // If there are more than one module defined in the app, and also there will be more than one RN Root view in the app.
  // In the case, we should use RCTBridge to load the root view to avoid load javascript runtime multiple times.
  //  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:nil launchOptions:nil];// we can provide the pre-initiated module to javascript context by pass a delegate to the bridge which is implementing - (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge.
  //  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
  //                                                   moduleName:@"ReactNativeStarter"
  //                                            initialProperties:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
