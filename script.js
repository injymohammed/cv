// Skills animation
document.querySelectorAll('.bar div').forEach(bar => {
  bar.style.width = bar.dataset.width;
});

// Open image modal
function openImage(img) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = img.src;
}

// Close modal
function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// Profile image click
const profile = document.getElementById("profileImg");
if (profile) {
  profile.onclick = function () {
    openImage(this);
  };
}
