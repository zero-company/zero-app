use std::process::Command;

macro_rules! p {
    ($($tokens: tt)*) => {
        println!("cargo:warning={}", format!($($tokens)*))
    }
}

fn main() {
    let tauri_dev = Command::new("cmd")
        .arg("-c")
        .arg("cargo tauri dev")
        .output()
        .unwrap();

    let stdout = tauri_dev.stdout;
    let s = String::from_utf8_lossy(&stdout);

    p!("run! {}", s);
}
