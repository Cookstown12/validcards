import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

function Upload() {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        cameraModes="photo, video"
        classNameUploader="uc-light"
        pubkey="0074b3a204b287bd637c"
      />
    </div>
  );
}

export default Upload;
