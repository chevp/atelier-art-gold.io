
# Deploying HTML Files to an FTP Server with SyncBackFree

This tutorial guides you through deploying a folder containing HTML files to an FTP server using SyncBackFree, a backup and synchronization software that helps you manage file transfers effectively.

---

## 1. Setting Up a Profile in SyncBackFree

1. **Open SyncBackFree** and create a new profile:
   - Click **Profile > New**.
   - Name the profile (e.g., "FTP Deployment").

2. **Select the Profile Type**:
   - Choose **Backup** if you only want to upload files to the FTP server.
   - Choose **Mirror** if you want to synchronize the local folder with the FTP server, reflecting any changes (additions, deletions, modifications).

---

## 2. Configuring Source and Destination

1. **Set Source and Destination**:
   - **Source**: Select the local folder containing your HTML files.
   - **Destination**: Choose **FTP** and enter your FTP server details:
     - Hostname (or IP address)
     - Username and Password
     - Remote directory (if applicable)

2. **Configure FTP Settings**:
   - Go to **Modify Profile > FTP Settings**.
   - Set the connection type (e.g., FTP, SFTP) based on your server’s requirements.
   - Adjust any additional connection settings (e.g., passive mode, timeouts) based on your server configuration.

---

## 3. Configuring File Sync Settings

1. In **Modify Profile > Expert** mode, adjust the **File & Folder** options:
   - Set file overwrite rules, such as overwriting files only if they are newer.
   - Exclude certain file types if needed (e.g., backup files, logs).

---

## 4. Running the Profile

1. **Test the connection** to ensure the settings are correct.
2. Run the profile to upload your files to the FTP server:
   - You can manually run the profile by selecting it and clicking **Run**.
   - Alternatively, **schedule** the profile for regular updates.

Once run, SyncBackFree will deploy your HTML files to the FTP server, enabling synchronization for ongoing changes.

---

### Conclusion
Following these steps will set up SyncBackFree to upload your HTML files to an FTP server efficiently, providing regular updates to keep the files in sync.
