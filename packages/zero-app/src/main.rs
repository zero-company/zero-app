#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    zero_app_core::run();
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
