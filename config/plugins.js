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
              provider: 'sendgrid',
              providerOptions: {
                  apiKey: env('SENDGRID_API_KEY'),
              },
              settings: {
                  defaultFrom: env('SENDGRID_DEFAULT_FROM', 'support@headstartsolutionsph.com'),
                  defaultReplyTo: env('SENDGRID_DEFAULT_REPLY_TO', 'support@headstartsolutionsph.com'),
              },
            },
          },
      }
    });
    