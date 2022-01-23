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
    }
    });
    