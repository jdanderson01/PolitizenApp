import React from "react";
import { StyleSheet, ScrollView, Text, SafeAreaView } from "react-native";

export default function Privacy() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.bodyText}>
          Politizen operates the Politizen application, which provides access to
          information regarding political candidates and legislation.{"\n"}
          {"\n"} This page is used to inform users of this application regarding
          our policies with the collection, use, andn disclosure of Personal
          Information if anyone decided to use our Service.{"\n"}
          {"\n"} If you choose to use our Service, then you agree to the
          collection and use of information in relation with this policy. The
          Personal Information that we collect is used for providing and
          improving the user's experience. We will not use or share your
          information with anyone except as described in this Privacy Policy.
          Our Privacy Policy was created with the help of Privacy Policy
          Template Generator.{"\n"}
          {"\n"} The terms used in this Privacy Policy have the same meanings as
          in our Terms and Conidtions, which is accessible at Politizen, unless
          otherwise defined in this Privacy Policy.{"\n"}
          {"\n"}
        </Text>

        <Text style={styles.subHead}>Information We Collect & Use</Text>
        <Text style={styles.bodyText}>
          For a better experience while using our application, we may require
          you to provide us with certain personally identifiable information,
          including but not loimited to your name, phone number, and postal
          address.
          {"\n"}The information that we collect will be used to contact or
          identify you.
        </Text>

        <Text style={styles.subHead}>Log Data</Text>
        <Text style={styles.bodyText}>
          We want to inform you that whenever you visit our application, we
          collect information that your browser sends to us that is called Log
          Data. This Log Data may include information such as your computer's
          Internet Protocol (IP) address, browser version, pages of our
          application that you visit, the time and date of your visit, the time
          spent on those pages, and other statistics.
        </Text>

        <Text style={styles.subHead}>Service Providers</Text>
        <Text style={styles.bodyText}>
          We may employ third-party companies and individuals due to teh
          following reasons:{"\n"}To facilitate our service;{"\n"}To provide
          service on our behalf;{"\n"}To perform service-related services; or
          {"\n"}To assist us in analyzing how our service is used.{"\n"}
          {"\n"}We want to inform our application users that these third parties
          have access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </Text>

        <Text style={styles.subHead}>Security</Text>
        <Text style={styles.bodyText}>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Text>

        <Text style={styles.subHead}>Links to other sites</Text>
        <Text style={styles.bodyText}>
          Our application contains links to other sites. If you click on a
          third-party link, you will be directed to that site. note that these
          external sites are not operated by us.{"\n"}Therefore, we strongly
          advise you to review the Privacy Policy of these websites. We have no
          control over, and assume no responsibility for the content, privacy
          policies, or practices of any third-party sites or services.
        </Text>

        <Text style={styles.subHead}>Children's Privacy</Text>
        <Text style={styles.bodyText}>
          Our application does not address anyone under the age of 13. We do not
          knowingly collect personal identifiable information from children
          under 13. In the case we discover that a child under 13 had provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian you are aware that your child
          has provided us with personal information, please contact us so that
          we will be able to do necessary actions.
        </Text>

        <Text style={styles.subHead}>Changes to this Privacy Policy</Text>
        <Text style={styles.bodyText}>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4e5",
    alignItems: "center",
    justifyContent: "center",
  },

  subHead: {
    margin: 2,
    padding: 5,
    fontWeight: "bold",
  },

  bodyText: {
    margin: 2,
    padding: 5,
  },
});
