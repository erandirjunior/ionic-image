import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequestsProvider } from '../providers/requests/requests';

import { HttpModule} from "@angular/http";

import { File } from '@ionic-native/file';
import { Transfer } from "@ionic-native/transfer";
import { FilePath } from "@ionic-native/file-path";
import { Camera } from '@ionic-native/camera';
import { TestemunhaPageModule } from "../pages/testemunha/testemunha.module";
import { Media } from "@ionic-native/media";
import { VideoPageModule } from "../pages/video/video.module";
import {VideoCapturePlus} from "@ionic-native/video-capture-plus";
//import { MediaCapture} from "ionic-native";
//import { MediaCapture } from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TestemunhaPageModule,
    VideoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestsProvider,
    Media,
    Camera,
    VideoCapturePlus
  ]
})
export class AppModule {}
