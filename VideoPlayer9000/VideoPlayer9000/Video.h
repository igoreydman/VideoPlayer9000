//
//  Video.h
//  VideoPlayer9000
//
//  Created by Igor E on 9/21/16.
//  Copyright © 2016 IgorEydman. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Video : NSObject
@property(nonatomic,strong) NSString *videoTitle;
@property(nonatomic,strong) NSString *videoDescription;
@property(nonatomic,strong) NSString *videoIframe;
@property(nonatomic,strong) NSString *thumbnailUrl;
@end
