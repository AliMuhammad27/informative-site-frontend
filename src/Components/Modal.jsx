import Swal from "sweetalert2";

export default function Error(err) {
  return Swal.fire({
    icon: "error",
    title: "ERROR",
    text: err ? err : "Please fill All the required fields",
    showConfirmButton: false,
    timer: 3000,
    background: "#45b6fe",
    color: "white",
    width: 595,
  });
}
