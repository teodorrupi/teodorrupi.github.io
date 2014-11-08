//The following code shows Selenium testing 
// The code is untested!

package com.example.tests;

import com.thoughtworks.selenium.*;
import java.util.regex.Pattern;

public class NewTest extends SeleneseTestCase {
    public void setUp() throws Exception {
        setUp("http://www.trivago.com/", "*firefox");
    }
      public void testNew() throws Exception {
          selenium.open("/");
          ArrayList input = ["Dusseldorf", "Bremen", "Berlin", "Hamburg"];
          for (String city : input){
            selenium.type("identifier=js_querystring", city);
            selenium.click("identifier=js_go");
            selenium.waitForPageToLoad("30000");
          }
          ArrayList list = selenium.getElements("class=path visitable");
          if list.lenght() != input.lenght(){
            System.out.println("Test Failed");
            return;
          }
          len = list.length();
          for(int x= 0; x<len; x++){
            assertTrue(list[len-1-x].getAttribute("title").toLowerCase().contains(input[x].toLowerCase));

          }
    }
}


