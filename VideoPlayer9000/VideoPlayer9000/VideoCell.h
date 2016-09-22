//
//  VideoCell.h
//  VideoPlayer9000
//
//  Created by Igor E on 9/21/16.
//  Copyright © 2016 IgorEydman. All rights reserved.
//

#import <UIKit/UIKit.h>
@class Video;

@interface VideoCell : UITableViewCell
-(void)updateUI:(nonnull Video*)video;
@end
