import Swal from "sweetalert2";
import Lottie from "react-lottie";
import AnimationData from "../../src/Lotties/102467-solar-panel.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: AnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Success = (message, heading) =>
  Swal.fire({
    // iconHtml: '<img src="images/question.png" class="img-fluid">',
    // iconHtml: `${
    //   iconHtml ? iconHtml : '<img src="images/question.png" class="img-fluid">'
    // }`,
    title: `${heading ? heading : "Completed"}`,
    didOpen: () => {
      <Lottie options={defaultOptions} height={150} width={150} />;
    },
    text: `${message ? message : "Completed"}`,
    showCloseButton: true,
    cancelButtonText: "Ok",
    customClass: {
      cancelButton: "px-3 py-1 site-btn mr-sm-1 mt-1",
    },
    background: "#fff",
    color: "black",
    width: 595,
    heightAuto: true,
  });

export default Success;
