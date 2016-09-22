//
//  HTTPServices.m
//  VideoPlayer9000
//
//  Created by Igor E on 9/18/16.
//  Copyright © 2016 IgorEydman. All rights reserved.
//

#import "HTTPServices.h"

#define URL_BASE "http://localhost:6069"
#define URL_VIDEOS "/videos"

@implementation HTTPServices

+ (id) instance {
    static HTTPServices *sharedInstance = nil;
    
    @synchronized (self) {
        if (sharedInstance == nil)
            sharedInstance = [[self alloc]init];
    }
    
    return sharedInstance;
    
}

- (void) getVideos:(nullable onComplete)completionHandler {
    NSURL *url = [NSURL URLWithString:[NSString stringWithFormat:@"%s%s", URL_BASE, URL_VIDEOS]];
    NSURLSession *session = [NSURLSession sharedSession];
    
    [[session dataTaskWithURL:url completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        
        if (data != nil) {
            NSError *err;
            NSArray *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:&err];
            
            if (err == nil) {
                completionHandler(json, nil);
            } else {
                completionHandler(nil, @"Data is corrupt. PLease try again.");
            }
        } else {
            NSLog(@"Network Err: %@", error.debugDescription);
            completionHandler(nil, @"Problem connecting with server");
        }
    }] resume];
}

@end
