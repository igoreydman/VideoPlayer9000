//
//  VideoVC.h
//  VideoPlayer9000
//
//  Created by Igor E on 9/22/16.
//  Copyright © 2016 IgorEydman. All rights reserved.
//

#import <UIKit/UIKit.h>
@class Video;

@interface VideoVC : UIViewController <UIWebViewDelegate>

@property (nonatomic,strong) Video *video;
@end
