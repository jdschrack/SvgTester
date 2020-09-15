import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import AddIcon from '../icons/AddIcon';
import AddCircleIcon from '../icons/AddCircleIcon';
import AnnouncementsIcon from '../icons/AnnouncementsIcon';
import ArrowBackIcon from '../icons/ArrowBackIcon';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import ArrowDropDownIcon from '../icons/ArrowDropDownIcon';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import BackspaceIcon from '../icons/BackspaceIcon';
import BankIcon from '../icons/BankIcon';
import CalendarIcon from '../icons/CalendarIcon';
import PasswordChangeIcon from '../icons/PasswordChangeIcon';
import CheckRegularIcon from '../icons/CheckRegularIcon';
import CloseClearIcon from '../icons/CloseClearIcon';
import CoinsIcon from '../icons/CoinsIcon';
import ColumnsIcon from '../icons/ColumnsIcon';
import DashboardIcon from '../icons/DashboardIcon';
import DeleteIcon from '../icons/DeleteIcon';
import DownloadIcon from '../icons/DownloadIcon';
import UpDownIcon from '../icons/UpDownIcon';
import EditIcon from '../icons/EditIcon';
import ErrorIcon from '../icons/ErrorIcon';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import FilterIcon from '../icons/FilterIcon';
import GiveDonateIcon from '../icons/GiveDonateIcon';
import GrandTotalIcon from '../icons/GrandTotalIcon';
import HeartIcon from '../icons/HeartIcon';
import HelpIcon from '../icons/HelpIcon';
import ImportChecksIcon from '../icons/ImportChecksIcon';
import LanguageIcon from '../icons/LanguageIcon';
import LinkIcon from '../icons/LinkIcon';
import LocationIcon from '../icons/LocationIcon';
import MemberExperienceIcon from '../icons/MemberExperienceIcon';
import MenuIcon from '../icons/MenuIcon';
import MessageIcon from '../icons/MessageIcon';
import MoreIcon from '../icons/MoreIcon';
import MoveIcon from '../icons/MoveIcon';
import OrganizationIcon from '../icons/OrganizationIcon';
import PaymentMethodsIcon from '../icons/PaymentMethodsIcon';
import PhoneIcon from '../icons/PhoneIcon';
import PledgeGoalIcon from '../icons/PledgeGoal';
import PrintIcon from '../icons/PrintIcon';
import ProfileIcon from '../icons/ProfileIcon';
import ProgressDownIcon from '../icons/ProgressDownIcon';
import ProgressUpIcon from '../icons/ProgressUpIcon';
import PurchaseIcon from '../icons/PurchaseIcon';
import RecurringGiftIcon from '../icons/RecurringGiving';
import RefundIcon from '../icons/RefundIcon';
import RemoveIcon from '../icons/RemoveIcon';
import ReportingIcon from '../icons/ReportingIcon';
import ResetIcon from '../icons/ResetIcon';
import ScrollBarMoverIcon from '../icons/ScrollBarMoverIcon';
import SearchIcon from '../icons/SearchIcon';
import SettingsIcon from '../icons/SettingsIcon';
import ShareIcon from '../icons/ShareIcon';
import SignOutIcon from '../icons/SignOutIcon';
import MinusIcon from '../icons/MinusIcon';
import SuccessIcon from '../icons/SuccessIcon';
import TextGivingIcon from '../icons/TextGivingIcon';
import TransactionIcon from '../icons/TransactionIcon';
import TrashIcon from '../icons/TrashIcon';
import UploadIcon from '../icons/UploadIcon';
import UserAccountIcon from '../icons/UserAccountIcon';
import UsersIcon from '../icons/UsersIcon';
import WebsiteIcon from '../icons/WebsiteIcon';
import VisaIcon from '../icons/CreditCards/Visa';
import MasterCardIcon from '../icons/CreditCards/MasterCard';
import AmericanExpressIcon from '../icons/CreditCards/AmericanExpress';
import DiscoverIcon from '../icons/CreditCards/Discover';
import ApplePayIcon from '../icons/CreditCards/ApplePay';
export interface Props {}

const IconExample: FC<Props> = () => {
  const height = 30;
  const width = 30;
  const bgColor = '#333';
  //const color = '#003f00'
  const color = 'rgba(225,225,225,1)';
  const styles = StyleSheet.create({
    headLine: {
      fontSize: 32,
    },
    safeAreaView: {
      backgroundColor: bgColor,
      margin: 0,
      flex: 1,
      flexDirection: 'column',
    },
    container: {
      margin: 0,
      padding: 24,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    iconBox: {
      margin: 9,
      height: height + 12,
      width: width + 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.iconBox}>
            <VisaIcon height={16} width={50} />
          </View>
          <View style={styles.iconBox}>
            <MasterCardIcon height={16} width={50} />
          </View>
          <View style={styles.iconBox}>
            <AmericanExpressIcon height={16} width={50} />
          </View>
          <View style={styles.iconBox}>
            <DiscoverIcon height={9} width={50} />
          </View>
          <View style={styles.iconBox}>
            <ApplePayIcon height={20} width={48} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.iconBox}>
            <AddIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <AddCircleIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <AnnouncementsIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ArrowBackIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ArrowDownIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ArrowDropDownIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ArrowLeftIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ArrowRightIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ArrowUpIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <BackspaceIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <BankIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <CalendarIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <CheckRegularIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <CloseClearIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <CoinsIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ColumnsIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <DashboardIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <DeleteIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <DownloadIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <EditIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ErrorIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ExternalLinkIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <FilterIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <GiveDonateIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <GrandTotalIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <HeartIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <HelpIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ImportChecksIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <LanguageIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <LinkIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <LocationIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <MemberExperienceIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <MenuIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <MessageIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <MinusIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <MoreIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <MoveIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <OrganizationIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <PasswordChangeIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <PaymentMethodsIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <PhoneIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <PledgeGoalIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <PrintIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ProfileIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ProgressDownIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ProgressUpIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <PurchaseIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <RecurringGiftIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <RefundIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <RemoveIcon
              outlineColor={bgColor}
              color={color}
              height={height}
              width={width}
            />
          </View>
          <View style={styles.iconBox}>
            <ReportingIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ResetIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ScrollBarMoverIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <SearchIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <SettingsIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <ShareIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <SignOutIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <SuccessIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <TextGivingIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <TransactionIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <TrashIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <UpDownIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <UploadIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <UserAccountIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <UsersIcon color={color} height={height} width={width} />
          </View>
          <View style={styles.iconBox}>
            <WebsiteIcon color={color} height={height} width={width} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

IconExample.propTypes = {};

export default IconExample;
