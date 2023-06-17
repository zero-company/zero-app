use std::process::Command;

macro_rules! p {
    ($($tokens: tt)*) => {
        println!("cargo:warning={}", format!($($tokens)*))
    }
}

fn main() {
    let out = Command::new("cmd")
        .args(&["/C", "echo hello"])
        .output()
        .unwrap();
    let stdout = out.stdout;
    let s = String::from_utf8_lossy(&stdout);

    p!("build! {:?}", s);

    tauri_build::build()
}
