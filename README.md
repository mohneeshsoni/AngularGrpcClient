# AngularGrpcClient


npm install google-protobuf @types/google-protobuf @improbable-eng/grpc-web ts-protoc-gen --save

protoc --plugin="protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:." --ts_out="service=true:." src/protobuf/Employee.proto
