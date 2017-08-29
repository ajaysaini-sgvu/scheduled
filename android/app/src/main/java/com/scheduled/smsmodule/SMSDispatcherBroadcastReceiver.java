package com.scheduled.smsmodule;


import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.support.v4.app.NotificationCompat;
import android.telephony.SmsManager;
import android.util.Log;

import com.scheduled.R;

/**
 * Trigger when scheduled SMS has to dispatch
 */
public class SMSDispatcherBroadcastReceiver extends BroadcastReceiver {

    public static final String ANDROID_CHANNEL_ID = "com.scheduled.ANDROID";

    @Override
    public void onReceive(Context context, Intent intent) {
        try {
            if (intent != null) {
                String receiptNumber = intent.getStringExtra("receiptNumber");
                String message = intent.getStringExtra("message");

                // send scheduled SMS
                SmsManager smsManager = SmsManager.getDefault();
                smsManager.sendTextMessage(receiptNumber, null, message, null, null);

                final Intent emptyIntent = new Intent();
                PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, emptyIntent, PendingIntent.FLAG_UPDATE_CURRENT);

                NotificationCompat.Builder mBuilder =
                        new NotificationCompat.Builder(context, ANDROID_CHANNEL_ID)
                                .setSmallIcon(R.mipmap.ic_launcher)
                                .setContentTitle(context.getString(R.string.app_name))
                                .setContentText("Message sent to " + receiptNumber)
                                .setContentIntent(pendingIntent);

                NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
                notificationManager.notify((int)System.currentTimeMillis(), mBuilder.build());
            }
        } catch (Exception e) {
            Log.e(getClass().getName(), e.getMessage());
        }
    }
}
