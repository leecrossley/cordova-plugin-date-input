//
//  DateInput.m
//  Copyright (c) 2014 Lee Crossley - http://ilee.co.uk
//

#import "DateInput.h"

@implementation DateInput

- (void) show:(CDVInvokedUrlCommand*)command;
{
    NSMutableDictionary *args = [command.arguments objectAtIndex:0];
    NSString *value = [args objectForKey:@"value"];
}

@end