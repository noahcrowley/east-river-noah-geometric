# east-river-noah-geometric

## Asset Managment in S3

Upload
```
aws s3 cp assets/east-river.mov s3://east-river-noah-geometric/
```

Sync
```
aws s3 sync assets/ s3://east-river-noah-geometric/
```

List
```
aws s3 ls s3://east-river-noah-geometric/
```

Delete
```
aws s3 rm s3://east-river-noah-geometric/east-river.mov
```