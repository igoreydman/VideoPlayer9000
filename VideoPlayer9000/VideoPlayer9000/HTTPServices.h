//
//  HTTPServices.h
//  VideoPlayer9000
//
//  Created by Igor E on 9/18/16.
//  Copyright © 2016 IgorEydman. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^onComplete)(NSArray * __nullable dataArray, NSString * __nullable errMessage);

@interface HTTPServices : NSObject

+ (id) instance;
- (void) getVideos:(nullable onComplete)completionHandler;

@end
