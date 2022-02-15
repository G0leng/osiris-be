module.exports = ({ env }) => ({
      upload: {
          config:{
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: 'AKIASVOUU4EK3STG2MGZ',
                secretAccessKey: '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',
                region: 'ap-southeast-1',
                //region: env('AWS_REGION'),//'us-east-1',
                params: {
                    Bucket: 'osi-images',
                    //Bucket: env('AWS_BUCKET'),//'olk-staging',
                },
            },
        },
        email: {
            config: {
              provider: 'strapi-provider-email-sendinblue',
              providerOptions: {
                sendinblue_api_key: env('SIB_API_KEY', 'xkeysib-ecb8d48734cf806be9d52ce303abceb170c15fa01d2212d1bfcb41f502d8d888-X8DQWCYJMKNLESVkxkeysib-ecb8d48734cf806be9d52ce303abceb170c15fa01d2212d1bfcb41f502d8d888-X8DQWCYJMKNLESVk'),
                sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'support@headstartsolutionsph.com'),
                sendinblue_default_from: env('SIB_DEFAULT_FROM', 'support@headstartsolutionsph.com'),
                sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'Support'),
              },
            },
          },
    }
    });
    