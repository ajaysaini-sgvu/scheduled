package com.scheduled.smsmodule;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.telephony.SmsManager;
import android.util.Log;

/**
 * Trigger when scheduled SMS has to dispatch
 */
public class SMSDispatcherBroadcastReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        try {
            if (intent != null) {
                String receiptNumber = intent.getStringExtra("receiptNumber");
                String message = intent.getStringExtra("message");

                // send scheduled SMS
                SmsManager smsManager = SmsManager.getDefault();
                smsManager.sendTextMessage(receiptNumber, null, message, null, null);
            }
        } catch (Exception e) {
            Log.e(getClass().getName(), e.getMessage());
        }
    }
}
